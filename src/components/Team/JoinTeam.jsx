import React from "react";
import { FaCrown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import img from '/JoinTeam.svg'
import p1 from '/p1.svg'

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
		<div className="h-screen flex place-items-center">
			<div className="bg-[#7353BA] p-9 text-white mx-4 w-full lg:mx-[10rem] rounded-xl grid md:grid-cols-2 gap-5">
				<div className="flex mx-auto">
					<img className="lg:my-auto" src={img} alt="JoinTeam" />
				</div>
				<div>
					<div className="bg-[#0F0F0F] rounded-xl text-center font-bold text-xl md:text-3xl p-4 mb-4">
						Team Code - {code}
					</div>
					<div className="bg-[#0F0F0F] rounded-xl text-center grid gap-6 font-bold text-xl md:text-3xl p-4">
						<div className="flex mx-auto justify-center">
              {teamName}
						</div>
						{addMembers}
					</div>
					<div className="mt-4 flex">
						<button
							type="button"
							className="bg-[#EC0023] rounded-xl p-4 mx-auto"
						>
							Leave Team
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JoinTeam;
