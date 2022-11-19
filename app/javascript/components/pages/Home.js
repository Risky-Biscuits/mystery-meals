import React from "react";
import Button from "@mui/material/Button";
import Greeting from "../components/Greeting";
import { height } from "@mui/system";

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <div className="page-container">
      <div className="logged-out-home">
        {/* When logged out */}
        <div className="logged_out">
          {!logged_in && (
            <>
              <div className="logged-out-box1">
                <div className="logged-out-box1-1">
                  <div className="logged-out-box1-2">
                    <h1>
                      Let Us Choose <br />
                      What You Eat
                    </h1>
                  </div>
                  <div className="logged-out-box1-button-box">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        padding: "12px",
                        bgcolor: "#55AF4D",
                        fontSize: "1.2rem",
                      }}
                      href={new_user_route}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                <img src={require("../assets/risky_biscuit_review_low.png")} />
              </div>
              <div className="logged-out-box2">
                <img src={require("../assets/risky_biscuit_phone.png")} />
                <div className="logged-out-box2-1">
                  <h2>How It Works</h2>
                  <div className="logged-out-box2-2">
                    <ol>
                      <li> Create and account</li>
                      <li> Add restaurants you like</li>
                      <li>
                        {" "}
                        We'll randomly select you <br /> restaurants
                      </li>
                    </ol>
                  </div>
                  <div className="logged-out-box2-button-box">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        padding: "12px",
                        bgcolor: "#55AF4D",
                        fontSize: "1.2rem",
                      }}
                      href={new_user_route}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="logged-out-box3">
                <h2>Meet The Team</h2>
                <div className="logged-out-box3-1">
                  <div className="team-1">
                    <img
                      src={require("../assets/david-thomas.png")}
                      height="331"
                      width="260"
                    />
                    <h3>David Thomas</h3>
                    <p>Tech Lead</p>
                  </div>
                  <div className="team-2">
                    <img
                      src={require("../assets/jeremy-duncan-1.png")}
                      height="331"
                      width="260"
                    />
                    <h3>Jeremy Duncan</h3>
                    <p>Project/Product Manager</p>
                  </div>
                  <div className="team-3">
                    <img
                      src={require("../assets/risky_biscuit_phone.png")}
                      height="331"
                      width="260"
                    />
                    <h3>Michy Herrera</h3>
                    <p>Design Lead</p>
                  </div>
                  <div className="team-4">
                    <img
                      src={require("../assets/risky_biscuit_phone.png")}
                      height="331"
                      width="260"
                    />
                    <h3>Ricky "Risky" Biscuit</h3>
                    <p>Mascot</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* When logged in */}
      <div className="logged_in">
        {logged_in && (
          <>
            <h1>Welcome!</h1>
            <img
              src={require("../assets/risky-biscuit-home.png")}
              height="273"
              width="403"
            />
            <Button
              variant="contained"
              sx={{ color: "white", padding: "12px", bgcolor: "#55AF4D" }}
              href="/restaurantindex"
            >
              SEE ALL RESTAURANTS
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", padding: "12px", bgcolor: "#55AF4D" }}
              href="/protectedrestaurantindex"
            >
              SEE MY RESTAURANTS
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", padding: "12px", bgcolor: "#55AF4D" }}
              href="/restaurantnew"
            >
              ADD RESTAURANT
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", padding: "12px", bgcolor: "#55AF4D" }}
              href=""
            >
              TELL ME WHERE TO EAT
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

// <>
// <h1>Welcome</h1>
// <img src={"../assets/Risky Biscuit_Headerlogo.png"} />
// <p>Risky Biscuits is here to help  you decided where to go to dinner. With Risky Biscuits it is easy to upload, view, and review your favorite restaurants.</p>
// <Greeting logged_in={logged_in} current_user={current_user} />
// </>
// );
// };
