import React from "react";
import { FaCrown } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import img from "/JoinTeam.svg";
import p1 from "/p1.svg";

function JoinTeam() {
	let { code } = useParams();
	const teamName = "Team Name";

	const members = [
		{ name: "kamil", leader: true },
		{ name: "shashank", leader: false },
		{ name: "dhruv" },
	];

	const addMembers = members.map((obj, id) => {
		return (
			// Members
			<div key={id} className="bg-[#424242] w-full p-3 rounded-xl text-xl flex">
				<img className="w-10 mr-3" src={p1} alt="p1" />
				<div className="my-auto">{obj.name}</div>
				{/* Leader */}
				{obj.leader && (
					<FaCrown color="gold" className="my-auto ml-auto mr-0" />
				)}
			</div>
		);
	});

	return (
		<div className="md:h-screen flex place-items-center">
			<div className="bg-[#7353BA] p-9 text-white mx-4 w-full lg:mx-[10rem] rounded-xl md:grid md:grid-cols-11 gap-5 md:my-0 my-4">
				<div className="flex justify-center col-span-5">
					<img className="" src={img} alt="JoinTeam" />
				</div>
				<div className="col-span-5">
					<div className="bg-[#0F0F0F] rounded-xl text-center font-bold text-xl md:text-3xl p-4 mb-4">
						Team Code - {code}
					</div>
					<div className="bg-[#0F0F0F] rounded-xl text-center grid gap-6 font-bold text-xl md:text-3xl p-4">
						<div className="flex mx-auto justify-center">{teamName}</div>
						{addMembers}
					</div>
					<div className="mt-4 flex">
						<button
							type="button"
							className="bg-[#EC0023] rounded-xl p-4 mx-auto hover:opacity-75"
						>
							Leave Team
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

export default JoinTeam;
