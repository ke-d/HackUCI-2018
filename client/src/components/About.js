import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

const About = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                <h1>{"About"}</h1>
                <p>{`It began with the question, what are some of the main problems we face in our everyday lives? We found two things: Keeping a diet, and going out to eat more often than not.Taking into account the categories such as: “health and wellness”, “most addictive”, and “best entrepreneurial”. we came up with an idea that will aide our users with both budgeting their meals and watching calorie count. For the limited time we had to code this, we created a scaled down version that will allow a user to input and save their daily budget, calorie count, and a radius of how for they’re willing to travel from their current location.`}</p>
                <p>{`With this, we are able to integrate Yelp apis to assist in giving us data on nearby restaurants and, ideally, calorie count and a meal that fits within their daily budget. The amount of restaurants outputted will depend on the radius they choose. Of course, with a larger radius, the more they can choose from. A user can also choose their favorite restaurants by clicking on the heart, indicating it is their top choice and therefore, keeping it at the top of the list if it is within their radius. Ultimately, we have created a progressive web app.`}</p>
                <p>{`We were also able to integrate sendGrid apis. These apis were another crucial part in
The development because without it, we cannot be sure that the user is meeting their goals. With the sendGrid api who can send receipts and transactions via email, we can track how much our user spent and how many calories it was.
`}</p>
                <p>{`Now moving on to the “addictive category”. My team and I know just as well that it is very hard to stay motivated to stay within our diet and budget. We also know how hard it is to choose a place to eat. Thus, we have added a feature that will choose a random place to eat from the list of choices within the user’s radius.`}</p>
                <p>{`Finally the most entrepreneurial hack. Entrepreneurship is all about being smart about money and your product. We wanted to add in coupons and promotions for each restaurant. We can make our money because businesses will want to pay us to promote them and add in their coupons. Unfortunately we could not fully implement it into our project as we do not have access to a database of current valid coupons.`}</p>
                <p>{`As a team we faced many challenges. First off, we have such a wide range of skills and backgrounds. Our team consists of a mathematician and philosopher, aerospace engineer, web developer, and two computer science majors. So, of course we had trouble finding out an environment we could all work in. On top of this we also faced our individual challenges such as getting randomly suspended from the Yelp api, trying to set up an android environment, trying to get Heroku to work, and learning a new set of skills.`}</p>
                <p>{`However, Learning a new set of skills is also our accomplishment. We each learned something new during this hackathon. Alex and Haydn, our back-end developers have learned java script and how to work with apis and git. I have learned about android and javascript. Kenny learned Heroku and how it differs from git. and VIctor learned front end development and was able to work with html/CSS and react.`}</p>
                <p>{`We can for-see our progressive web app having future potential. It is definitely scalable and has room for new opportunities and improvement that can continue to better help people lead a healthier lifestyle. We know this because we had many features that we unfortunately could not implement during this Hackathon. Every application will be unique to every user, it is motivating, and allows users to be in control of their health. Thus we hope you enjoy Team SUDOku’s web application, Fed Up!`}</p>

        </Col>
    </Row>
    </Grid>
    )
}



export default About;
