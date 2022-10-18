import { faArrowRight, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FaFontAwesome } from "react-icons/fa";
import { Tree, TreeNode } from "react-organizational-chart";
const Chart = () => {
	//     const StyledNode = {}`
	//   padding: 5px;
	//   border-radius: 8px;
	//   display: inline-block;
	//   border: 1px solid red;
	// `;
	return (
		<div className="container mx-auto lg:visible lg:w-full  ">
			<div className="mx-28">
				<Tree
					lineWidth={"2px"}
					lineColor={"green"}
					lineBorderRadius={"10px"}
					label={
						<div className="p-3 rounded-md inline-block border-2 border-black">
							Board of Trust
						</div>
					}
				>
					<TreeNode
						label={
							<div className="p-3 rounded-md inline-block border-2 border-black">
								Board Committees
							</div>
						}
					>
						<TreeNode
							label={
								<div className="p-3 rounded-md inline-block border-2 border-black">
									<li>1</li>
									<li>2</li>
									<li>3</li>
									<li>4</li>
									<li>5</li>
									
									
								</div>
							}
						/>
					</TreeNode>
					<TreeNode
						label={
							<div className="p-5 rounded-md inline-block border-2 border-black">
								CEO and President
							</div>
						}
					>
						<TreeNode
							label={
								<div className="p-5 rounded-md inline-block border-2 border-black">
									Administrative Board
								</div>
							}
						>
							<TreeNode
								label={
									<div className="p-5 rounded-md inline-block border-2 border-black">
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
									</div>
								}
							/>
						</TreeNode>

						<TreeNode
							label={
								<div className="p-5 rounded-md inline-block border-2 border-black">
									Academic Board
								</div>
							}
						>
							<TreeNode
								label={
									<div className="p-5 rounded-md inline-block border-2 border-black">
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
									</div>
								}
							/>
						</TreeNode>
					</TreeNode>
					<TreeNode
							label={
								<div className="p-5 rounded-md inline-block border-2 border-black">
									Academic Senate
								</div>
							}
						>
							<TreeNode
								label={
									<div className="p-5 rounded-md inline-block border-2 border-black">
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
									</div>
								}
							/>
						</TreeNode>
				</Tree>
			</div>
		</div>
	);
};

export default Chart;
