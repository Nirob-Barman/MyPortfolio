import fs from "fs";
import path from "path";
import { loadEnv } from "vite";

export function validateEnv(mode) {
    console.log(`Validating environment variables for mode: ${mode}`);
    if (mode !== "development") {
        return;
    }

    const envPath = path.resolve(process.cwd(), ".env");

    // Check if .env file exists
    if (!fs.existsSync(envPath)) {
        throw new Error(
            "\n\n" +
            ".env FILE NOT FOUND\n\n" +
            "This project requires a .env file to run.\n" +
            "Please create a .env file using .env.example.\n\n"
        );
    }

    const env = loadEnv(mode, process.cwd(), "");

    const requiredVariables = [
        "VITE_apiKey",
        "VITE_authDomain",
        "VITE_projectId",
        "VITE_storageBucket",
        "VITE_messagingSenderId",
        "VITE_appId",
        "VITE_EMAILJS_SERVICE_ID",
        "VITE_EMAILJS_TEMPLATE_ID",
        "VITE_EMAILJS_PUBLIC_KEY",
    ];

    const missingVariables = requiredVariables.filter(
        (variable) => !env[variable]
    );

    if (missingVariables.length > 0) {
        throw new Error(
            "\n\n" +
            "ENVIRONMENT VARIABLES MISSING\n\n" +
            missingVariables.map((variable) => `  - ${variable}`).join("\n") +
            "\n\n" +
            "Please check your .env file.\n"
        );
    }
}