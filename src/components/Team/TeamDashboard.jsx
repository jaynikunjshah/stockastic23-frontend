import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

function TeamDashboard() {
  const [teamExists, setTeamExists] = useState(false);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teamCode, setTeamCode] = useState("");
  const [settingTeamName, setSettingTeamName] = useState("");
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");
  const [isHeLeader, setIsHeLeader] = useState(false);

  const [creatingTeam, setCreatingTeam] = useState(false);
  const [joiningTeam, setJoiningTeam] = useState(false);
  const [deletingTeam, setDeletingTeam] = useState(false);
  const [leavingTeam, setLeavingTeam] = useState(false);
  const [changingTeamName, setChangingTeamName] = useState(false);

  const [sucessSnack, setSuccessSnack] = useState(false);

  const showSnackbar = (message, duration) => {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.classList.add("visible");
    snackbar.classList.remove("invisible");
    setTimeout(function () {
      snackbar.classList.remove("visible");
      snackbar.classList.add("invisible");
    }, duration);
  };

  const navigate = useNavigate();

  const checkLoggenIn = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLoggenIn();
  }, []);

  const checkTeam = async () => {
    await axios
      .get(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          console.log(e);
          setTeamExists(true);
          const members = e.data.team.members;
          setTeam(members.map((e) => e.name));
          setTeamCode(e.data.team.teamCode);
          setSettingTeamName(e.data.team.name);
          setIsHeLeader(e.data.isLead);
          console.log(isHeLeader);
        }
      })
      .catch((e) => {
        setTeamExists(false);
      });
    setLoading(false);
  };

  useEffect(() => {
    checkTeam();
  }, [loading]);

  const createTeam = async () => {
    setCreatingTeam(true);
    setLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/`,
        { name: teamName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((e) => {
        console.log(e);
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! Team Created", 1500);
        }
      })
      .catch((e) => {
        console.log(e);
        setSuccessSnack(false);
        showSnackbar(e.response.data.message, 1500);
      });
    setLoading(false);
    setCreatingTeam(false);
  };

  const joinTeam = async () => {
    setJoiningTeam(true);
    setLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/join`,
        { teamCode: joinTeamCode },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! Joined team", 1500);
        }
      })
      .catch((e) => {
        setSuccessSnack(false);
        showSnackbar(e.response.data.message, 1500);
      });
    setLoading(false);
    setJoiningTeam(false);
  };

  const deleteTeam = async () => {
    setDeletingTeam(true);
    setLoading(true);
    await axios
      .delete(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! Team deleted", 1500);
        }
      })
      .catch((e) => {
        setSuccessSnack(false);
        showSnackbar(e.data.message, 1500);
      });
    setLoading(false);
    setDeletingTeam(false);
  };

  const leaveTeam = async () => {
    setLeavingTeam(true);
    setLoading(true);
    await axios
      .delete(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/leave`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! Team left", 1500);
        }
      })
      .catch((e) => {
        setSuccessSnack(false);
        showSnackbar(e.data.message, 1500);
      });
    setLoading(false);
    setLeavingTeam(false);
  };

  const changeTeamNameButton = async () => {
    setChangingTeamName(true);
    setLoading(true);
    await axios
      .patch(
        `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/`,
        { name: settingTeamName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! Team name changed", 1500);
        }
      })
      .catch((e) => {
        setSuccessSnack(false);
        showSnackbar(e.data.message, 1500);
      });
    setLoading(false);
    setChangingTeamName(false);
  };

  const loggedOut = () => {
    localStorage.clear();
    setSuccessSnack(true);
    showSnackbar("Successful ! Logged Out", 1500);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Stockastic&apos;23 | Dashboard</title>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 Dashboard page" />
      </Helmet>
      {loading ? (
        <main className="absolute inset-0 flex items-center justify-center bg-[#000000] text-white">
          <Loader />
        </main>
      ) : teamExists ? (
        <div className="h-screen flex place-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/17/17367.png"
            className="flex invert absolute h-12 top-0 right-0 m-4 cursor-pointer"
            alt="logout"
            onClick={loggedOut}
          />
          <div className="bg-[#7353BA] p-9 text-white mx-4 w-full lg:mx-[10rem] rounded-xl grid md:grid-cols-2 gap-5">
            <div className="flex mx-auto">
              <img
                className="lg:my-auto"
                src="CreateTeam.svg"
                alt="CreateTeam"
              />
            </div>
            <div>
              <div className="bg-[#0F0F0F] rounded-xl text-center font-bold text-xl md:text-3xl p-4 mb-4">
                Team Code - {teamCode}
              </div>
              <div className="bg-[#0F0F0F] rounded-xl text-center grid gap-6 font-bold text-xl md:text-3xl p-4">
                {isHeLeader ? (
                  <div className="flex mx-auto justify-center">
                    <input
                      defaultValue={settingTeamName}
                      onChange={(e) => {
                        setSettingTeamName(e.target.value);
                      }}
                      className="bg-[#0F0F0F] text-center w-3/5"
                      type="text"
                      disabled={changingTeamName}
                    />
                    <img
                      onClick={changeTeamNameButton}
                      className={`ml-4 w-4 hover:opacity-80 ${
                        changingTeamName ? "opacity-80" : ""
                      }`}
                      src="pencil.svg"
                      alt="pencil"
                      disabled={changingTeamName}
                    />
                  </div>
                ) : (
                  <div className="flex mx-auto justify-center">
                    <input
                      defaultValue={settingTeamName}
                      className="bg-[#0F0F0F] text-center w-3/5"
                      type="text"
                      disabled={true}
                    />
                  </div>
                )}
                {team.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-[#424242] w-full p-3 rounded-xl text-xl flex"
                    >
                      <img className="w-10 mr-3" src="p1.svg" alt="p1" />
                      <div className="my-auto">{e}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex">
                {isHeLeader ? (
                  <button
                    type="button"
                    className={`rounded-xl p-4 mx-auto hover:opacity-75 ${
                      deletingTeam ? "bg-[#EC0023] opacity-75" : "bg-[#EC0023]"
                    }`}
                    onClick={deleteTeam}
                    disabled={deletingTeam}
                  >
                    {deletingTeam ? "Deleting Team..." : "Delete Team"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`rounded-xl p-4 mx-auto hover:opacity-75 ${
                      leavingTeam ? "bg-[#EC0023] opacity-75" : "bg-[#EC0023]"
                    }`}
                    onClick={leaveTeam}
                    disabled={leavingTeam}
                  >
                    {leavingTeam ? "Leaving Team..." : "Leave Team"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex place-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/17/17367.png"
            className="flex invert absolute h-12 top-0 right-0 m-4 cursor-pointer"
            alt="logout"
            onClick={loggedOut}
          />
          <div className="bg-[#7353BA] p-9 text-white mx-4 w-full lg:mx-[10rem] rounded-xl grid md:grid-cols-2 gap-5">
            <div className="flex mx-auto">
              <img
                className="lg:my-auto"
                src="TeamDashboard.svg"
                alt="TeamDashboard"
              />
            </div>
            <div className="bg-[#0F0F0F] rounded-xl text-center font-bold text-3xl lg:text-3xl p-4">
              <div className="text-[#d5d2d2]"> Dashboard</div>
              <div className="bg-[#1E1B1E] grid gap-4 rounded-xl mt-4 p-3 lg:p-5 text-sm lg:text-xl">
                <input
                  type="text"
                  placeholder="Enter Team Name"
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                  className="text-center text-black w-full py-3 rounded-xl"
                  disabled={creatingTeam}
                />
                <button
                  type="button"
                  onClick={createTeam}
                  className={`w-full py-3 rounded-xl hover:opacity-75 ${
                    creatingTeam ? "bg-[#7353BA] opacity-75" : "bg-[#7353BA]"
                  }`}
                  disabled={creatingTeam}
                >
                  {creatingTeam ? "Creating Team..." : "Create Your Team"}
                </button>
                <div>OR</div>
                <input
                  type="text"
                  placeholder="Enter Team Code"
                  onChange={(e) => {
                    setJoinTeamCode(e.target.value);
                  }}
                  className="text-center text-black w-full py-3 rounded-xl"
                  disabled={joiningTeam}
                />
                <button
                  type="button"
                  className={`w-full py-3 m-1 rounded-xl hover:opacity-75 ${
                    joiningTeam ? "bg-[#7353BA] opacity-75" : "bg-[#7353BA]"
                  }`}
                  onClick={joinTeam}
                  disabled={joiningTeam}
                >
                  {joiningTeam ? "Joining Team..." : "Join A Team"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {sucessSnack ? (
        <div
          id="snackbar"
          className={
            "w-fit h-fit bg-green-400 border-green-800 text-black-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4"
          }
          role="alert"
        >
          Snackbar message here.
        </div>
      ) : (
        <div
          id="snackbar"
          className={
            "w-fit h-fit bg-red-100 border-red-400 text-red-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4"
          }
          role="alert"
        >
          Snackbar message here.
        </div>
      )}
    </>
  );
}

export default TeamDashboard;
