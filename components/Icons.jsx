import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const NotificationIcon = (props) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<G clipPath="url(#a)" fill="#4775f2">
			<Path d="M20 10V8A8 8 0 0 0 4 8v2a4.441 4.441 0 0 1-1.547 3.193A4.183 4.183 0 0 0 1 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 0 0-1.453-2.807A4.44 4.44 0 0 1 20 10ZM9.145 21.9a2.992 2.992 0 0 0 5.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1Z" />
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 0h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);
// export const CoursesIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<G clipPath="url(#a)">
// 			<Path
// 				d="M6 12h2c.6 0 1-.4 1-1V3.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3L12.1.5c-.2-.5-.8-.8-1.3-.5L9 .8C8.9.4 8.5 0 8 0H6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1Z"
// 				fill="#7D8FFF"
// 			/>
// 			<Path
// 				d="M1 12h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1Z"
// 				fill="#546BFB"
// 			/>
// 			<Path d="M16 14H0v2h16v-2Z" fill="#D7DCFF" />
// 		</G>
// 		<Defs>
// 			<ClipPath id="a">
// 				<Path fill="#fff" d="M0 0h16v16H0z" />
// 			</ClipPath>
// 		</Defs>
// 	</Svg>
// );
// export const HomeIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<G clipPath="url(#a)">
// 			<Path
// 				d="M11 16h2c.6 0 1-.4 1-1V8h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6C8.3 0 7.8 0 7.4.3l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1Z"
// 				fill="#546BFB"
// 			/>
// 		</G>
// 		<Defs>
// 			<ClipPath id="a">
// 				<Path fill="#fff" d="M0 0h16v16H0z" />
// 			</ClipPath>
// 		</Defs>
// 	</Svg>
// );

// export const LightIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<Path
// 			d="M9 0H7v2h2V0ZM14.294 3.052 12.88 1.637 11.465 3.05l1.414 1.414 1.415-1.413ZM16 7h-2v2h2V7ZM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414ZM9 14H7v2h2v-2ZM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413ZM2 7H0v2h2V7ZM4.465 3.12 3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12Z"
// 			fill="#7D8FFF"
// 		/>
// 		<Path
// 			d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
// 			fill="#546BFB"
// 		/>
// 	</Svg>
// );

// export const LogoutIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<Path
// 			d="M3.4 2H8v2h2V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v9c0 .3.1.5.3.7l5 5c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.1.6-.5.6-.9V6c0-.3-.1-.5-.3-.7L3.4 2ZM5 12.6l-3-3V3.4l3 3v6.2Z"
// 			fill="#546BFB"
// 		/>
// 		<Path
// 			d="M15.7 7.3 12 3.6 10.6 5l2 2H8v2h4.6l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4Z"
// 			fill="#D7DCFF"
// 		/>
// 	</Svg>
// );

// export const MenuIcon = (props) => (
// 	<Svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		xmlnsXlink="http://www.w3.org/1999/xlink"
// 		height={16}
// 		width={16}
// 		{...props}
// 	>
// 		<Defs>
// 			<Path
// 				id="a"
// 				opacity={1}
// 				d="M1 1h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2Z"
// 			/>
// 			<Path
// 				id="b"
// 				opacity={1}
// 				d="M1 7h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2Z"
// 			/>
// 			<Path
// 				id="c"
// 				opacity={1}
// 				d="M1 13h6a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2Z"
// 			/>
// 		</Defs>
// 		<Use xlinkHref="#a" fill="#4775F2" />
// 		<Use xlinkHref="#b" fill="#4775F2" />
// 		<Use xlinkHref="#c" fill="#4775F2" fillOpacity={0.49} />
// 	</Svg>
// );

// export const NightIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<Path
// 			d="M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0Z"
// 			fill="#999"
// 		/>
// 	</Svg>
// );

// export const PlayIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<G clipPath="url(#a)">
// 			<Path
// 				d="M14 7.999a.999.999 0 0 0-.427-.819l-10-7A1 1 0 0 0 2 .999V15a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 14 8.001v-.002c0 .001 0 .001 0 0Z"
// 				fill="#546BFB"
// 			/>
// 		</G>
// 		<Defs>
// 			<ClipPath id="a">
// 				<Path fill="#fff" d="M0 0h16v16H0z" />
// 			</ClipPath>
// 		</Defs>
// 	</Svg>
// );

// export const RefreshIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<Path
// 			d="M4.5 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.3.4 5.9.4 3.1 3.1L.9.9.2 7.3l6.4-.7-2.1-2.1Z"
// 			fill="#546BFB"
// 		/>
// 		<Path
// 			d="m15.8 8.7-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4Z"
// 			fill="#D7DCFF"
// 		/>
// 	</Svg>
// );

// export const StarIcon = (props) => (
// 	<Svg
// 		width={16}
// 		height={16}
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<G clipPath="url(#a)">
// 			<Path
// 				d="m15.144 5.439-4.317-.628L8.9.9a1.041 1.041 0 0 0-1.8 0L5.173 4.812l-4.317.627A1 1 0 0 0 .3 7.145l3.123 3.045-.737 4.3a1 1 0 0 0 1.451 1.054L8 13.513l3.861 2.029a1 1 0 0 0 1.451-1.054l-.737-4.3L15.7 7.145a1 1 0 0 0-.554-1.705l-.002-.001Z"
// 				fill="#546BFB"
// 			/>
// 		</G>
// 		<Defs>
// 			<ClipPath id="a">
// 				<Path fill="#fff" d="M0 0h16v16H0z" />
// 			</ClipPath>
// 		</Defs>
// 	</Svg>
// );
