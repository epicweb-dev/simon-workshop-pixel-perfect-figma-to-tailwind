import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			<div className="mx-auto max-w-md rounded-3xl bg-slate-100 text-center shadow-lg ring-1 ring-slate-300">
				{/* 🐨 
					1. Add a `margin-top` of level `32` to the `<header>`  
					2. Add a `border-top` `1px` thick and of `slate-300` color to the `<header>`
				*/}

				{/* 
          🐨 Notice the top offset not working? This is due to collapsing margins.
					You can fix it with the `overflow-auto` class on the card container.
        */}
				<header className="flex flex-col items-center border-slate-300 px-8">
					<img
						src={user.avatarUrl}
						alt={`avatar for ${user.name}`}
						className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
					/>
					<h1 className="mt-8 text-3xl text-slate-900">{user.name}</h1>
					<p className="mt-2 text-slate-500">Joined on {user.registerDate}</p>
				</header>
				<p className="text-pretty mt-8 px-8 text-lg text-slate-900">
					{user.bio}
				</p>
				<footer className="mt-16 border-t border-slate-300">
					{/* 🐨 Remove the `rounded-b-3xl` class — it's no longer needed now! */}
					<a
						href="#"
						className="block rounded-b-3xl bg-white px-8 py-6 font-semibold text-slate-900 transition hover:bg-slate-100"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}