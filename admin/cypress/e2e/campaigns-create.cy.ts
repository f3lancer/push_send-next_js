describe("Campaign Create Page (Mock)", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/api/campaigns", {
      statusCode: 200,
      body: {
        _id: "newlycreated123",
        name: "New Campaign",
        title: "Title",
        body: "Some text",
        click_url: "https://example.com",
        tags: ["test"],
        status: "new",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-01T00:00:00Z",
      },
    }).as("createCampaign");

    cy.intercept("GET", "**/api/campaigns/newlycreated123", {
      statusCode: 200,
      body: {
        _id: "newlycreated123",
        name: "New Campaign",
        title: "Title",
        body: "Some text",
        click_url: "https://example.com",
        tags: ["test"],
        status: "new",
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-01T00:00:00Z",
      },
    }).as("getCreatedCampaign");
  });

  it("creates a new campaign and redirects to edit", () => {
    cy.visit("/campaigns-mock/new");

    cy.get("input").eq(0).type("New Campaign"); // Name
    cy.get("input").eq(1).type("Title"); // Title
    cy.get("input").eq(2).type("Some text"); // Text
    cy.get("input").eq(3).type("https://example.com"); // Link
    cy.get("input").eq(4).type("test"); // Tags

    cy.contains("button", "Create").click();
    cy.wait("@createCampaign");

    cy.url().should("include", "/campaigns-mock/newlycreated123/edit");
    cy.wait("@getCreatedCampaign");

    cy.get("input").eq(0).should("have.value", "New Campaign");
    cy.get("input").eq(1).should("have.value", "Title");
    cy.get("input").eq(2).should("have.value", "Some text");
    cy.get("input").eq(3).should("have.value", "https://example.com");
    cy.get("input").eq(4).should("have.value", "test");
  });
});
