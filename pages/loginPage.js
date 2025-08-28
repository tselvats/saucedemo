const loginCredentials = require ('../test-data/user.json')
class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.userName = "#user-name"
        this.password = "Password";
        this.buttonLogin = "#login-button";
        this.openMenu="#react-burger-menu-btn";
        this.buttonLogout = "#logout_sidebar_link";
    }

    async loginToApplication()
    {
        await this.page.locator(this.userName).fill(loginCredentials.userName);
        await this.page.getByPlaceholder(this.password).fill(loginCredentials.password);
        await this.page.locator(this.buttonLogin).click();
        await this.page.waitForLoadState('networkidle');
    }

    async logoutToApplication()
    {
        await this.page.locator(this.openMenu).click();
        await this.page.locator(this.buttonLogout).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.buttonLogin).isVisible();

    }
}

module.exports=LoginPage;