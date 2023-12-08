import React from "react";
import Card from "../components/ui/Card";
import Layout from "../components/layout/Layout";

function HomePage() {
  return (
    <Layout>
        <div>
        <section id="home">
            <Card>
            <h2>Home Section</h2>
            {/* Your content for the home section */}
            </Card>
        </section>
        <section id="about">
            <Card>
            <h2>About Us Section</h2>
            {/* Your content for the about us section */}
            </Card>
        </section>
        <section id="contact">
            <Card>
            <h2>Contact Section</h2>
            {/* Your content for the contact section */}
            </Card>
        </section>
        {/* Add more sections as needed */}
        </div>
    </Layout>
  );
}

export default HomePage;