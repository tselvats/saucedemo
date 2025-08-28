// @ts-check
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout : 20 * 1000,
  expect:{
    timeout:5000
  },
 use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    viewport: null,
    launchOptions: {
            args: ['--start-maximized']
          },
  },  
});

