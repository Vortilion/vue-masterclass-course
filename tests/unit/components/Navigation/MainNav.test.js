/* eslint-disable no-undef */
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia({ stubActions: true });

    const $route = {
      name: "Home",
    };
    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("displays company name", () => {
    renderMainNav();
    const companName = screen.getByText("Bobo Careers");
    expect(companName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();

    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (navigationMenuItem) => {
        return navigationMenuItem.textContent;
      },
    );

    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Careers",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when the user is not logged in", () => {
    it("does not display user profile picture but sign in button", () => {
      renderMainNav();

      const profileImage = screen.queryByRole("img", {
        name: /User profile image/i, // Alternativ ein String, aber bevorzugt wird Regex (da hier z.b. case-insensitive)
      });

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      expect(profileImage).not.toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("when the user logs in", () => {
    it("displays user profile picture, not before", async () => {
      renderMainNav();
      const userStore = useUserStore();

      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i, // Alternativ ein String, aber bevorzugt wird Regex (da hier z.b. case-insensitive)
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      userStore.isLoggedIn = true;

      await userEvent.click(loginButton);

      profileImage = screen.queryByRole("img", {
        name: /user profile image/i, // Alternativ ein String, aber bevorzugt wird Regex (da hier z.b. case-insensitive)
      });

      expect(profileImage).toBeInTheDocument();
    });
  });
});
