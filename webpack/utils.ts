import path from "path";

const root = (arg: string) => path.resolve(__dirname, `./../${arg}`);

export default { root };
