import classes from "./Layout.module.css";
import HomeNavbar from "./HomeNavbar";

function Layout(props) {
  return (
    <div>
      <HomeNavbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
