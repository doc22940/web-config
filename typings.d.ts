
// https://github.com/s-panferov/awesome-typescript-loader/issues/146#issuecomment-248808206
declare module "*.scss" {
	const content: string;
	export default content;
}

declare module "*.css" {
	const content: string;
	export default content;
}