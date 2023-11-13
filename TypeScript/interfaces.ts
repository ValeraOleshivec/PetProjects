interface IConfig {
	protocol: "http" | "https";
	port: 3000 | 3001;
}

interface IRole {
	role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: "admin",
};

const startIServer = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);

	return "Server started";
};

startIServer(serverIConfig.protocol, serverIConfig.port);
