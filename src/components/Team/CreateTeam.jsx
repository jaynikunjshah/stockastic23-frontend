import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useState, useRef } from "react";

function CreateTeam() {
	const TeamCode = "000000";

	const [teamName, setTeamName] = useState("Team Name");

	const [members, setMembers] = useState([
		{ name: "kamil", leader: true },
		{ name: "shashank", leader: false },
		{ name: "dhruv", leader: false },
	]);

	const addMembers = members.map((obj, id) => {
		return (
			// Members
			<div key={id} className="bg-[#424242] w-full p-3 rounded-xl text-xl flex">
				<img className="w-10 mr-3" src="p1.svg" alt="p1" />
				<div className="my-auto">{obj.name}</div>
				{/* Kick Button */}
				{!obj.leader && (
					<MdDeleteForever
						color="red"
						className="my-auto ml-auto mr-0 hover:opacity-75"
						onClick={() => {
							let filteredArr = members.filter(
								(item) => item.name !== obj.name
							);
							setMembers(filteredArr);
						}}
					/>
				)}
				{/* Leader */}
				{obj.leader && (
					<FaCrown color="gold" className="my-auto ml-auto mr-0" />
				)}
			</div>
		);
	});

	const [disabled, setDisabled] = useState(true);
	const [autoFocus, setAutoFocus] = useState(false);
	const inputRef = useRef(null);

	const changeTeamName = () => {
		setAutoFocus(true);
		setDisabled(false);
		inputRef.current.focus();
	};

	const changeInput = (e) => {
		setTeamName(e.target.value);
	};

	return (
		<div className="md:h-screen flex place-items-center">
			<div className="bg-[#7353BA] p-9 text-white mx-4 w-full lg:mx-[10rem] rounded-xl md:grid md:grid-cols-11 md:gap-5 md:my-0 my-4">
				<div className="flex col-span-5 justify-center">
					<img className="" src="CreateTeam.svg" alt="CreateTeam" />
				</div>
				<div className="col-span-5">
					<div className="bg-[#0F0F0F] rounded-xl text-center font-bold text-xl md:text-3xl p-4 mb-4">
						Team Code - {TeamCode}
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
								onClick={changeTeamName}
								className="ml-4 w-4 hover:opacity-80"
								src="pencil.svg"
								alt="pencil"
							/>
						</div>
						{addMembers}
					</div>
					<div className="mt-4 flex">
						<button
							type="button"
							className="bg-[#EC0023] rounded-xl p-4 mx-auto hover:opacity-75"
						>
							Delete Team
						</button>
					</div>
				</div>
				<div className="flex justify-end md:mt-0 mt-3 h-min">
					<button color="white" type="button" className="md:my-0 my-auto w-min bg-[#EC0023] p-4 rounded-xl hover:opacity-75">
						<RiLogoutBoxRFill />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CreateTeam;
