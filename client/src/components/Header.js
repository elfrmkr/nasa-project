import {
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";
import "./header.style.css";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {},
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
    justifyContent: "end",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    },
  },
});

const Header = (props) => {
  const { classes, onNav, ...rest } = props;
  return (
    <ArwesHeader animate>
      <div
        style={{
          display: "flex",
          marginLeft: "40px",
        }}
        className={`${classes.root} header`}
        {...rest}
      >
        {/* <img
          src="/favicon.png"
          alt=""
          className={classes.img}
          style={{
            margin: "15px 10px 15px 0",
            height: "50px",
            width: "auto",
          }}
        /> */}
        <Logo animate size={50} className={classes.logo} layer="header" />
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/">
              <Words
                animate
                className={classes.banner}
                style={{ cursor: "pointer" }}
              >
                NASA Mission Control
              </Words>
            </Link>
          </Highlight>
        </Clickable>
        <nav className={`${classes.nav} topnav-right`}>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/launch">
                <div className="flex-container rounded-md hover:bg-gray-300">
                  <div className="flex-child">
                    <i className="material-icons">check_circle_outline</i>
                  </div>
                  <div className="flex-child">Launch</div>
                </div>
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/upcoming">
                <div className="flex-container rounded-md hover:bg-gray-300">
                  <div className="flex-child">
                    <i className="material-icons">update</i>
                  </div>
                  <div className="flex-child">Upcoming</div>
                </div>
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/history">
                <div className="flex-container rounded-md hover:bg-gray-300">
                  <div className="flex-child">
                    <i className="material-icons">history</i>
                  </div>
                  <div className="flex-child">History</div>
                </div>
              </Link>
            </Highlight>
          </Clickable>
        </nav>
      </div>
    </ArwesHeader>
  );
};

export default withStyles(styles)(Header);
