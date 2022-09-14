import React from "react";
import MediasIcon from "./MediasIcon";

const Footer = () => {
	return (
		<div className="w-full  h-20">
			<div className="w-full  justify-between">
				<MediasIcon></MediasIcon>
				<footer class="footer justify-around   p-4   bg-sky-800 text-white">
					<div className="">
						<span class="footer-title">Services</span>
						<a class="link link-hover">Branding</a>
						<a class="link link-hover">Design</a>
						<a class="link link-hover">Marketing</a>
						<a class="link link-hover">Advertisement</a>
					</div>
					<div className="">
						<span class="footer-title">Company</span>
						<a class="link link-hover">About us</a>
						<a class="link link-hover">Contact</a>
						<a class="link link-hover">Jobs</a>
						<a class="link link-hover">Press kit</a>
					</div>
					<div className="">
						<span class="footer-title">Legal</span>
						<a class="link link-hover">Terms of use</a>
						<a class="link link-hover">Privacy policy</a>
						<a class="link link-hover">Cookie policy</a>
					</div>
					<div className="">
						<span class="footer-title">Newsletter</span>
						<div class="form-control lg:w-80 sm:w-60">
							<label class="label">
								<span class="label-text">Enter your email address</span>
							</label>
							<div class="relative">
								<input
									type="text"
									placeholder="username@site.com"
									class="input input-bordered  pr-16"
								/>
								<button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
