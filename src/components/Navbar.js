import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            Diary
            <CalendarMonthIcon />
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
