import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeamDashboard() {
	const navigate = useNavigate();
	const [code, setCode] = useState("");

	const updateInput = (e) => {
		setCode(e.target.value);
	};

	const navigateJoinTeam = () => {
		// Code authentication
		if (code.length === 6) {
			navigate(`/JoinTeam/${code}`);
		}
    console.log("Working");
	};

	const navigateCreateTeam = () => {
		navigate("/CreateTeam");
	};

	return (
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
						<a href="#">
							<button
								type="button"
								onClick={navigateCreateTeam}
								className="bg-[#7353BA] w-full py-3 rounded-xl hover:opacity-75"
							>
								Create Your Team
							</button>
						</a>
						<div>OR</div>
						<input
							type="text"
							placeholder="Enter Team Code"
							value={code}
							onChange={updateInput}
							className="text-center text-black w-full py-3 rounded-xl"
						/>
						<button
							type="button"
							className="bg-[#7353BA] w-full py-3 m-1 rounded-xl hover:opacity-75"
							onClick={navigateJoinTeam}
						>
							Join A Team
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamDashboard;
