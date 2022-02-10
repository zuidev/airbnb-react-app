import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data.js"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const listCard = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-list">
                {listCard}
            </section>
        </div>
    )
}