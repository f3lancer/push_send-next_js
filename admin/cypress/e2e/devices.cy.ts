describe("Devices page — filter, pagination and detail", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/devices*", (req) => {
      const url = new URL(req.url, "http://localhost");
      const page = url.searchParams.get("page") || "1";
      const email = url.searchParams.get("email") || "";
      const userId = url.searchParams.get("user_id") || "";
      const platform = url.searchParams.get("platform") || "";
      const tags = url.searchParams.get("tags") || "";
      const deviceToken = url.searchParams.get("device_token") || "";

      if (
        userId === "42" &&
        platform === "android" &&
        tags === "marketing" &&
        deviceToken === "abc123"
      ) {
        req.reply({
          statusCode: 200,
          body: {
            total: 1,
            offset: 0,
            items: [
              {
                _id: "10",
                email: "user@example.com",
                user_id: "42",
                platform: "android",
                tags: ["marketing"],
                device_token: "abc123",
              },
            ],
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
              {
                _id: "3",
                email: "page2-a@example.com",
                user_id: "3",
                platform: "ios",
              },
              {
                _id: "4",
                email: "page2-b@example.com",
                user_id: "4",
                platform: "android",
              },
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
              {
                _id: "1",
                email: "page1-a@example.com",
                user_id: "1",
                platform: "ios",
              },
              {
                _id: "2",
                email: "page1-b@example.com",
                user_id: "2",
                platform: "android",
              },
            ],
          },
        });
      }
    }).as("getDevices");
  });

  it("filters and paginates devices correctly", () => {
    cy.visit("/devices-mock");
    cy.wait("@getDevices");

    cy.contains("page1-a@example.com").should("exist");
    cy.contains("page1-b@example.com").should("exist");

    cy.contains("a", "2").click();
    cy.wait("@getDevices");
    cy.contains("page2-a@example.com").should("exist");
    cy.contains("page1-a@example.com").should("not.exist");

    cy.contains("a", "1").click();
    cy.wait("@getDevices");

    cy.contains("button", "Open Filter").click();

    cy.get("input[name=email]").type("user@example.com");
    cy.get("input[name=userId]").type("42");
    cy.get("input[name=platform]").type("android");
    cy.get("input[name=tags]").type("marketing");
    cy.get("input[name=deviceToken]").type("abc123");

    cy.get("button")
      .filter((i, el) => el.innerText === "Filter")
      .click();

    cy.wait("@getDevices").then((interception) => {
      const url = interception.request.url;
      expect(url).to.include("user_id=42");
      expect(url).to.include("platform=android");
      expect(url).to.include("tags=marketing");
      expect(url).to.include("device_token=abc123");
    });

    cy.contains("user@example.com").should("exist");

    cy.contains("button", "Reset").click();

    cy.contains("user@example.com").should("not.exist");
    cy.contains("page1-a@example.com").should("exist");

    cy.contains("button", "Open Filter").click();
    cy.contains("button", "Open Import").click();
    cy.contains("button", "Open Import").click();
  });

  it("displays device details and allows deleting", () => {
    cy.intercept("GET", "**/api/devices/685e3833878bb37cd2685f03", {
      statusCode: 200,
      body: {
        _id: "685e3833878bb37cd2685f03",
        device_token: "abcdefg123456",
        platform: "android",
        user_id: "42",
        email: "user@example.com",
        tags: ["marketing", "test"],
        undelivered: true,
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-02T00:00:00Z",
      },
    }).as("getDeviceById");

    cy.intercept("DELETE", "**/api/devices/685e3833878bb37cd2685f03", {
      statusCode: 200,
      body: {},
    }).as("deleteDevice");

    cy.visit("/devices-mock/685e3833878bb37cd2685f03");
    cy.wait("@getDeviceById");

    cy.contains("ID:").next().should("contain", "685e3833878bb37cd2685f03");
    cy.contains("Device Token:").next().should("contain", "abcdefg123456");
    cy.contains("Platform:").next().should("contain", "android");
    cy.contains("User ID:").next().should("contain", "42");
    cy.contains("Email:").next().should("contain", "user@example.com");
    cy.contains("Tags:").next().should("contain", "marketing, test");
    cy.contains("Undelivered:").next().should("contain", "Yes");
    cy.contains("Created at:").parent().should("contain", "2024-01-01");
    cy.contains("Updated at:").parent().should("contain", "2024-01-02");

    cy.contains("button", "Delete").click();
    cy.wait("@deleteDevice");

    cy.url().should("include", "/devices");
  });
});
