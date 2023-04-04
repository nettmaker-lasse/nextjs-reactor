import Image from "next/image"

function Logo(props: any) {
	const { renderDefault, title } = props;

	return (
		<div className="flex space-x-2 item-center">
			<Image
				className="object-cover text-white invert"
				width={30}
				height={30}
				src="https://nettmaker.no/wp-content/themes/nettmaker/dist/images/logo.svg"
				alt="logo"
			/>
			<>{renderDefault(props)}</>
		</div>
	);
}

export default Logo;