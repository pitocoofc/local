import { HttpServer } from "@capacitor-community/http-server";

export async function iniciarServidor() {
    await HttpServer.start({
        port: 8080,
        localhostOnly: false
    });
}
