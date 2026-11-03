// Dərs: Locators
// Locator nədir?
// Locator veb-səhifədəki elementləri tapmaq üçün istifadə olunur.
// Məsələn:
// - Login düyməsi
// - Username inputu
// - Password inputu
// - Search xanası
// - Checkbox
// Playwright elementləri müxtəlif üsullarla tapa bilir.
// 1. getByRole()
// Elementi roluna görə tapır.

// page.getByRole('button', { name: 'Login' });
// page.getByText('Welcome');
// page.getByPlaceholder('Enter username');
// page.getByLabel('Email');



//Məqsəd: Login səhifəsində username, password və login düyməsinin göründüyünü yoxlamaqdır.
// const { test, expect } = require('@playwright/test');

// test('Login page elements', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     await expect(page.getByPlaceholder('Username')).toBeVisible();

//     await expect(page.getByPlaceholder('Password')).toBeVisible();

//     await expect(
//         page.getByRole('button', { name: 'Login' })
//     ).toBeVisible();

// });




// 1. fill() nədir?--fill() input xanasına məlumat daxil edir.
// 2. click() nədir?--click() elementə klik edir.

// const { test, expect } = require('@playwright/test');

// test('Successful login', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     await page.getByPlaceholder('Username').fill('standard_user');

//     await page.getByPlaceholder('Password').fill('secret_sauce');

//     await page.getByRole('button', { name: 'Login' }).click();

//     await expect(page).toHaveURL(/inventory/);

//     await expect(
//         page.getByText('Products')
//     ).toBeVisible();

// });

// Yadda saxla:
// - fill() — məlumat daxil edir.
// - click() — klik edir.
// - toBeVisible() — elementin göründüyünü yoxlayır.
// - toHaveURL() — səhifənin URL-ini yoxlayır.



//error mesajını yoxlamaq üçün test nümunəsi
// const { test, expect } = require('@playwright/test');

// test('Login with wrong password', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     await page.getByPlaceholder('Username').fill('standard_user');

//     await page.getByPlaceholder('Password').fill('wrong_password');

//     await page.getByRole('button', { name: 'Login' }).click();

//     await expect(page.getByText(
//         'Username and password do not match any user in this service'
//     )).toBeVisible();

// });




// Dərs 6: Playwright Assertions
// Assertion nədir?Assertion — test zamanı gözlədiyimiz nəticə ilə faktiki nəticəni müqayisə etməkdir.

// Məsələn, login etdikdən sonra Products səhifəsinin açılmasını gözləyirik. Playwright bunu yoxlayır.
// 1. toBeVisible()
// Elementin ekranda görünüb-görünmədiyini yoxlayır.
// await expect(page.getByText('Products')).toBeVisible();

// Məna: Products mətni görünməlidir.
// 2. toHaveText()
// Elementin mətnini yoxlayır.
// await expect(page.locator('.title')).toHaveText('Products');

// Məna: .title elementinin mətni Products olmalıdır.
// 3. toHaveURL()
// Səhifənin URL ünvanını yoxlayır.
// await expect(page).toHaveURL(/inventory/)

// Məna: URL daxilində inventory sözü olmalıdır.
// 4. toBeEnabled()
// Elementin aktiv olub-olmadığını yoxlayır.
// await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();

// Məna: Login düyməsi aktiv olmalıdır.
// 5. toBeDisabled()
// Elementin deaktiv olub-olmadığını yoxlayır.
// await expect(page.getByRole('button', { name: 'Login' })).toBeDisabled();

// Məna: Login düyməsi deaktiv olmalıdır.
// 6. toHaveValue()
// Input daxilindəki dəyəri yoxlayır.
// await expect(page.getByPlaceholder('Username')).toHaveValue('standard_user');


// Məna: Username inputunda standard_user olmalıdır.



// const { test, expect } = require('@playwright/test');

// test('Login assertions test', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     const username = page.getByPlaceholder('Username');
//     const password = page.getByPlaceholder('Password');
//     const loginButton = page.getByRole('button', { name: 'Login' });

//     await expect(username).toBeVisible();
//     await expect(password).toBeVisible();
//     await expect(loginButton).toBeVisible();
//     await expect(loginButton).toBeEnabled();

//     await username.fill('standard_user');
//     await password.fill('secret_sauce');

//     await expect(username).toHaveValue('standard_user');

//     await loginButton.click();

//     await expect(page).toHaveURL(/inventory/);
//     await expect(page.getByText('Products')).toBeVisible();

// });

//musahibe sual cavab-toBeVisible() elementin görünməsini, toBeEnabled() isə elementin aktiv olmasını yoxlayır.



// 5. locator() və CSS Selector
// Bu üsul HTML elementlərini CSS selector vasitəsilə tapır.

// Məsələn, HTML kodu belədir:
// <input id="user-name" class="input_error">

// Playwright-də:
// page.locator('#user-name');

// const { test, expect } = require('@playwright/test');

// test('Locator practice', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     const username1 = page.getByPlaceholder('Username');

//     const username2 = page.locator('#user-name');

//     await expect(username1).toBeVisible();

//     await expect(username2).toBeVisible();

// });

// 7. Vacib QA anlayışı: Hansı Locator daha yaxşıdır?
// Ümumiyyətlə, bu ardıcıllığı yadda saxla:
// 1. getByRole() — əlçatanlıq və istifadəçi görünüşünə əsaslanan seçim.
// 2. getByLabel() və getByPlaceholder() — form elementləri üçün.
// 3. getByText() — mətn elementləri üçün.
// 4. locator() — CSS və digər dəqiq seçimlər üçün.
// Mümkün olduqda stabil və unikal locator seçmək lazımdır.



// Dərs 8: Playwright Waits
// 1. Wait nədir?
// Təsəvvür et ki, login düyməsinə klik etdin. Saytın məhsullar səhifəsini açması üçün müəyyən vaxt lazımdır.

// Playwright element hazır olmadan əməliyyatı yerinə yetirməməlidir. Bunun üçün gözləmə mexanizmlərindən istifadə olunur.
// 2. Auto-waiting
// Playwright-in ən yaxşı xüsusiyyətlərindən biridir.

// Məsələn:
// await page.getByRole('button', { name: 'Login' }).click();


// Playwright klik etməzdən əvvəl avtomatik yoxlayır ki:
// - Element mövcuddur?
// - Görünür?
// - Aktivdir?
// - Klik edilə biləcək vəziyyətdədir?
// Yəni hər dəfə ayrıca gözləmə yazmağa ehtiyac yoxdur.
// 3. expect ilə gözləmə
// await expect(page.getByText('Products')).toBeVisible();


// Playwright Products mətninin görünməsini müəyyən timeout ərzində gözləyir.

// Əgər element vaxtında görünməsə, test FAIL olacaq.
// 4. waitForTimeout()
// await page.waitForTimeout(3000);


// Bu kod 3 saniyə gözləyir.

// Amma diqqət: bu üsulu real testlərdə çox istifadə etmək məsləhət deyil. Çünki lazımsız gecikmə yaradır və testləri zəiflədir.
// 5. waitForURL()
// Səhifənin URL dəyişməsini gözləyir.
// await page.waitForURL('**/inventory.html');

// Məsələn, login etdikdən sonra məhsullar səhifəsinə keçidi gözləyir.

// const { test, expect } = require('@playwright/test');

// test('Login and wait for products', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     await page.getByPlaceholder('Username').fill('standard_user');

//     await page.getByPlaceholder('Password').fill('secret_sauce');

//     await page.getByRole('button', { name: 'Login' }).click();

//     await page.waitForURL('**/inventory.html');

//     await expect(page.getByText('Products')).toBeVisible();

// });

// interview suali:Auto-waiting və waitForTimeout() arasında fərq nədir?
//cavab:Auto-waiting: Playwright element əməliyyat üçün hazır olana qədər gözləyir. Hazır olan kimi 
//əməliyyatı icra edir.waitForTimeout(3000): Playwright heç nəyi yoxlamadan 3 saniyə gözləyir, sonra davam edir.

// Dərs 9: Hooks — beforeEach və afterEach
// Hooks testlərdən əvvəl və sonra avtomatik icra olunan funksiyalardır.
// 1. beforeEach()
// Hər test başlamazdan əvvəl işləyir.
// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
// });

// Məsələn, 3 testimiz varsa, hər testdən əvvəl sayt açılacaq.
// 2. afterEach()
// Hər test bitdikdən sonra işləyir.
// test.afterEach(async ({ page }) => {
//     console.log('Test tamamlandı');
// });

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Successful login', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
});

test('Wrong password', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText(
        'Username and password do not match any user in this service'
    )).toBeVisible();
});

test.afterEach(async () => {
    console.log('Test tamamlandı');
});

//Müsahibə sualı-beforeEach() və afterEach() arasında fərq nədir? beforeEach() hər testdən əvvəl işləyir, 
// afterEach() isə hər testdən sonra işləyir.