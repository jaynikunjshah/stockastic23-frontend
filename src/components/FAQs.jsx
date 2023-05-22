import React from "react";
import "./FAQs.css";

function FAQs() {
  // Array of faqs
	const qans = [
		{
			questions: "1. Question 1",
			answers:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?",
		},
		{
			questions: "2. Question 2",
			answers:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?",
		},
		{
			questions: "3. Question 3",
			answers:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?",
		},
		{
			questions: "4. Question 4",
			answers:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?",
		},
		{
			questions: "5. Question 5",
			answers:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?",
		},
	];

	const faq = qans.map((obj, id) => {
		return (
			<details key={id} className="mt-4 w-full">
				<summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#1E1B1E] p-4">
					{obj.questions}
				</summary>
				<div className="bg-[#1E1B1E] font-medium p-2 pb-0 tracking-[0.5px] delay-700 transition duration-150 ease-in-out">
					{obj.answers}
				</div>
			</details>
		);
	});

	return (
		<div className="grid mx-auto grid-cols-7 text-white w-2/3 pt-6 mb-[90px] place-items-center h-max mt-9">
			<div className="container mx-auto col-span-7 lg:col-span-3">
				<h1 className="text-6xl font-medium text-center title-font mb-6">
					FAQ's
				</h1>
				<div className="w-full mx-auto my-2 ">{faq}</div>
			</div>
			{/* FAQ image */}
			<img
				className="hidden lg:flex col-span-4 ml-[190px]"
				src="faq.svg"
				alt="FAQ.png"
			/>
		</div>
	);
}

export default FAQs;
