describe("Campaigns page — filter and pagination combined", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/companies*", (req) => {
      const url = new URL(req.url, "http://localhost");
      const page = url.searchParams.get("page") || "1";
      const name = url.searchParams.get("name") || "";
      const tags = url.searchParams.get("tags") || "";

      if (name === "X" && tags === "promo") {
        req.reply({
          statusCode: 200,
          body: {
            total: 1,
            offset: 0,
            items: [{ _id: "10", name: "Filtered Company X" }],
          },
        });
        return;
      }

      if (page === "2") {
        req.reply({
          statusCode: 200,
          body: {
            total: 4,
            offset: 2,
            items: [
              { _id: "3", name: "Page 2 - Company A" },
              { _id: "4", name: "Page 2 - Company B" },
            ],
          },
        });
      } else {
        req.reply({
          statusCode: 200,
          body: {
            total: 4,
            offset: 0,
            items: [
              { _id: "1", name: "Page 1 - Company X" },
              { _id: "2", name: "Page 1 - Company Y" },
            ],
          },
        });
      }
    }).as("getCompanies");

    cy.intercept("GET", "**/api/campaigns/1234567890abcdef12345678", {
      statusCode: 200,
      body: {
        _id: "1234567890abcdef12345678",
        name: "Test Campaign",
        title: "Welcome Title",
        body: "Hello\nWorld",
        click_url: "https://example.com",
        tags: ["promo", "launch"],
        status: "new",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-02T00:00:00Z",
      },
    }).as("getCampaignById");

    cy.intercept("POST", "**/api/campaigns/**/run", {
      statusCode: 200,
      body: { status: "completed" },
    }).as("runCampaign");

    cy.intercept("PUT", "**/api/campaigns/1234567890abcdef12345678", {
      statusCode: 200,
      body: {
        _id: "1234567890abcdef12345678",
        name: "Updated Campaign",
        title: "New Title",
        body: "Updated text",
        click_url: "https://updated.com",
        tags: ["updated", "testing"],
        status: "updated",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-03T00:00:00Z",
      },
    }).as("updateCampaign");
  });

  it("filters and paginates companies correctly", () => {
    cy.visit("/campaigns-mock");
    cy.wait("@getCompanies");

    cy.contains("Page 1 - Company X").should("exist");
    cy.contains("Page 1 - Company Y").should("exist");

    cy.contains("a", "2").should("be.visible").click();
    cy.wait("@getCompanies");
    cy.contains("Page 2 - Company A").should("exist");
    cy.contains("Page 2 - Company B").should("exist");
    cy.contains("Page 1 - Company X").should("not.exist");

    cy.contains("a", "1").click();
    cy.wait("@getCompanies");

    cy.get("input").eq(0).clear().type("promo"); // tags
    cy.get("input").eq(1).clear().type("X"); // name
    cy.contains("button", "Filter").click();

    cy.wait("@getCompanies");
    cy.contains("Filtered Company X").should("exist");
    cy.contains("Page 1 - Company X").should("not.exist");
    cy.contains("Page 2 - Company A").should("not.exist");
  });

  it("displays campaign details and allows deleting", () => {
    cy.visit("/campaigns-mock/1234567890abcdef12345678");
    cy.wait("@getCampaignById");

    cy.contains("ID:").next().should("contain", "1234567890abcdef12345678");
    cy.contains("Name:").next().should("contain", "Test Campaign");
    cy.contains("Title:").next().should("contain", "Welcome Title");
    cy.contains("Text:").next().should("contain", "Hello");
    cy.contains("Link:").next().should("contain", "https://example.com");
    cy.contains("Tags:").next().should("contain", "promo, launch");
    cy.contains("Status:").parent().should("contain", "new");
    cy.contains("Created at:").parent().should("contain", "2024-01-01");
    cy.contains("Updated at:").parent().should("contain", "2024-01-02");

    cy.contains("button", "Run").should("not.be.disabled").click();
    cy.wait(500);
    cy.wait("@runCampaign");
    cy.contains("button", "Run").should("be.disabled");
    cy.contains("Status:").parent().should("not.contain", "new");

    cy.intercept("DELETE", "**/api/campaigns/1234567890abcdef12345678", {
      statusCode: 200,
      body: {},
    }).as("deleteCampaign");

    cy.contains("button", "Delete").click();
    cy.wait("@deleteCampaign");
    cy.url().should("include", "/campaigns");
  });

  it("allows editing and deleting a campaign", () => {
    cy.visit("/campaigns-mock/1234567890abcdef12345678/edit");
    cy.wait("@getCampaignById");

    cy.get("input").eq(0).clear().type("Updated Campaign");
    cy.get("input").eq(1).clear().type("New Title");
    cy.get("input").eq(2).clear().type("Updated text");
    cy.get("input").eq(3).clear().type("https://updated.com");
    cy.get("input").eq(4).clear().type("updated, testing");

    cy.contains("button", "Update").click();
    cy.wait("@updateCampaign");
    cy.contains("Campaign successfully updated!");
  });
});
