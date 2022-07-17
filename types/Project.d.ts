export interface Project {
	key: number;
	name: string;
	shortDescription: string;
	tags: string[];
	isHackathonRelated: boolean;
	hackathonName: string;
	startedAt: string;
	endedAt: string;
	description: string;
	inProgress: boolean;
	isLive: boolean;
	links: Link[];
	images: Image[];
}

interface Link {
	where: string;
	link: string;
}

interface Image {
	src: string;
	alt: string;
}
