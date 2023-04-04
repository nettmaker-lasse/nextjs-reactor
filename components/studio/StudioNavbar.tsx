import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function StudioNavbar(props: any) {
	return (
		<>
		<div className="flex items-center justify-between p-5">
			<Link href="/" className="flex items-center text-black">
			<ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-black"></ArrowUturnLeftIcon>
			Go to website</Link>
		</div>
		<div>{props.renderDefault(props)}</div>
		</>
	)
}

export default StudioNavbar