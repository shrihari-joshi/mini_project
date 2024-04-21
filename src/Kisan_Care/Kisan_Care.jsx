import Home from '../Home/Home'
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import './Kisan_Care.css'

const makeRequestAPI = async (prompt) => {
    const res = await axios.post("http://localhost:3500/generate", { prompt });
    return res.data;
};

const formatResponse = (response) => {
    const paragraphs = response.split("\n\n");
  
    return paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("**");
        return (
            <div key={index}>
            {lines.map((line, idx) => {
                if (idx % 2 === 0) {
                return (
                    <p key={idx} className="normal">
                        {line}
                    </p>
                );
                } else {
                const numberedLines = line.split(/\*\*(\d+)\. /).filter(Boolean);
                return (
                    <ol key={idx} className="numbered">
                        {numberedLines.map((numberedLine, index) => (
                            <li key={index}>{numberedLine}</li>
                        ))}
                    </ol>
                );
                }
            })}
            </div>
        );
    });
};
  

function Kisan_Care() {
    const [prompt, setPrompt] = useState("");
    //!mutation
    const mutation = useMutation({
        mutationFn: makeRequestAPI,
        mutationKey: ["gemini-ai-request"],
    });
    //!submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        mutation.mutate(prompt);
    };
    console.log(mutation);
    return (
        <div className="App">
            <header>
                <h1>Ask our AI about crops and fertilizers</h1>
            </header>
            <p>Enter a prompt and let our AI craft a unique solution for your problem.</p>
            <form className="App-form" onSubmit={submitHandler}>
                <label htmlFor="Enter your prompt:"></label>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Write your problem here..."
                    className="App-input"
                />
                <button className="App-button" type="submit">
                    Generate Solution
                </button>
                <section className="App-response">
                    {mutation.isPending && <p>Generating solution for your problem...</p>}
                    {mutation.isError && <p>Cannot fulfill your request for this time</p>}
                    {mutation.isSuccess && formatResponse(mutation.data)}
                </section>
            </form>
        </div>  
    );
}

export default Kisan_Care;