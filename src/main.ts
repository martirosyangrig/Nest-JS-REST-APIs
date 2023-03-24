import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import {AppModule} from "./app.module"

async function start() {
    const PORT = process.env.PORT || 8088
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
            .setTitle("Learning course of Nest JS")
            .setDescription("Documentation REST API")
            .setVersion("1.0.0")
            .addTag("MG")
            .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, document);

    await app.listen(PORT, ()=> {
        console.log(`App listening ${PORT}`)
    })
}

start()