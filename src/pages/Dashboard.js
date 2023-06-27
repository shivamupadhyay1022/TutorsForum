import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import styles from "../style";
import { AuthContext } from "../components/AuthProvider";




function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/signin");
    }
  };



  return (
    <div className="mainContainer bg-primary flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
      <div>
                    <h3 className="text-4xl font-bold text-purple-600">
                    <span className="text-gradient">SignUp</span>
                    </h3>
            </div>
      {currentUser && <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Welcome, {username}</p>}
      <div className="buttons">
        <button onClick={clickLogin} className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          {currentUser ? "Log Out" : "Login"}
        </button>

      </div>
    </div>
  );
}

export default Dashboard;