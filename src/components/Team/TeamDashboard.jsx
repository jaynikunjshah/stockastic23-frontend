import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeamDashboard() {
  const [teamExists, setTeamExists] = useState(false);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leader, setLeader] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [settingTeamName, setSettingTeamName] = useState("");
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");
  const [isHeLeader,setIsHeLeader] = useState(false)

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
          alert(e.data.message);
        } else {
          console.log(e);
          setTeamExists(true);
          const members = e.data.team.members;
          setTeam(members.map((e) => e.name));
          setTeamCode(e.data.team.teamCode);
          setLeader(team[0]);
          setSettingTeamName(e.data.team.name);
        }
      })
      .catch((e) => {
        console.log(e);
        setTeamExists(false);
      });
    setLoading(false);
  };

  useEffect(() => {
    checkTeam();
    if (leader === localStorage.getItem("name")) {
      setIsHeLeader(true);
    }
  }, [loading]);

  const createTeam = async () => {
    setLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/`,
        { name: teamName.toString() },
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
          alert(e.data.message);
        } else {
          alert("Team Created");
        }
      })
      .catch((e) => {
        console.log(e);
        alert(e.data.message);
      });
    setLoading(false);
  };

  const joinTeam = async () => {
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
          alert(e.data.message);
        } else {
          alert("Team Joined");
        }
      })
      .catch((e) => {
        alert(e.data.message);
      });
    setLoading(false);
  };

  const deleteTeam = async () => {
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
          alert(e.data.message);
        } else {
          alert("Team deleted");
        }
      })
      .catch((e) => {
        alert(e.data.message);
      });
    setLoading(false);
  };

  const leaveTeam = async () => {
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
          alert(e.data.message);
        } else {
          alert("Team left");
        }
      })
      .catch((e) => {
        alert(e.data.message);
      });
    setLoading(false);
  };

  const changeTeamNameButton = async () => {
    setLoading(true);
    await axios
      .patch(
        `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team/`,
        { name: settingTeamName.toString() },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          alert(e.data.message);
        } else {
          alert("Team left");
        }
      })
      .catch((e) => {
        alert(e.data.message);
      });
    setLoading(false);
  };

  //   const addMembers = team.map((obj, id) => {
  //     return (
  //       // Members
  //       <div key={id} className="bg-[#424242] w-full p-3 rounded-xl text-xl flex">
  //         <img className="w-10 mr-3" src={p1} alt="p1" />
  //         <div className="my-auto">{obj}</div>
  //       </div>
  //     );
  //   });

  const [disabled, setDisabled] = useState(true);
  const [autoFocus, setAutoFocus] = useState(false);
  const inputRef = useRef(null);

  const changeTeamName = () => {
    setAutoFocus(true);
    setDisabled(false);
    inputRef.current.focus();
  };

  const changeInput = (e) => {
    settingTeamName(e.target.value);
  };

  return (
    <>
      {loading ? (
        <span className="text-8xl text-white">Loading...</span>
      ) : teamExists ? (
        <div className="h-screen flex place-items-center">
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
                <div className="flex mx-auto justify-center">
                  <input
                    value={teamName}
                    onChange={changeInput}
                    className="bg-[#0F0F0F] text-center w-3/5"
                    disabled={disabled}
                    autoFocus={autoFocus}
                    ref={inputRef}
                    type="text"
                  />
                  <img
                    onClick={changeTeamNameButton}
                    className="ml-4 w-4 hover:opacity-80"
                    src="pencil.svg"
                    alt="pencil"
                  />
                </div>
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
                    className="bg-[#EC0023] rounded-xl p-4 mx-auto hover:opacity-75"
                    onClick={deleteTeam}
                  >
                    Delete Team
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#EC0023] rounded-xl p-4 mx-auto hover:opacity-75"
                    onClick={leaveTeam}
                  >
                    Leave Team
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex place-items-center">
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
                    setTeamName(e);
                  }}
                  className="text-center text-black w-full py-3 rounded-xl"
                />
                <button
                  type="button"
                  onClick={createTeam}
                  className="bg-[#7353BA] w-full py-3 rounded-xl hover:opacity-75"
                >
                  Create Your Team
                </button>
                <div>OR</div>
                <input
                  type="text"
                  placeholder="Enter Team Code"
                  onChange={(e) => {
                    setJoinTeamCode(e.target.value);
                  }}
                  className="text-center text-black w-full py-3 rounded-xl"
                />
                <button
                  type="button"
                  className="bg-[#7353BA] w-full py-3 m-1 rounded-xl hover:opacity-75"
                  onClick={joinTeam}
                >
                  Join A Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamDashboard;
