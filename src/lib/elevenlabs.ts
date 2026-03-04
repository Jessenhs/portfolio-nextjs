import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({ 
    apiKey: process.env.ELEVENLABS_API_KEY || "" 
});

async function TextToSpeech(text: string) {
    const audio = await elevenlabs.textToSpeech.convert("tQ4MEZFJOzsahSEEZtHK", {
        text: text,
        modelId: "eleven_v3",
    });
    return audio;
}

export default TextToSpeech;