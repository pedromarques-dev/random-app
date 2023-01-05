const strings = {
	components: {
		formLogin: {
			title: "Login",
			emailPlaceholder: "Digite seu email aqui",
			passwordPlaceholder: "Digite sua senha aqui",
			rememberMe: "Lembrar de mim",
		},
		navbar: {
			menu: "Menu",
			titleDrawer: "Navegue entre as páginas",
		},
		pagination: {
			textPage: (page: number) => `Página ${page} de 5`,
		},
		userCard: {
			labels: {
				name: "Nome:",
				user: "Usuário:",
				email: "Email:",
				phone: "Telefone:",
			},
		},
	},
	generals: {
		back: "Voltar",
		enter: "Entrar",
		next: "Próximo",
	},
	pages: {
		dog: {
			title: "App para amantes dos doguinhos",
			attPhoto: "Atualizar foto",
		},
		home: {
			title: "Lista de usuários do RandomUser",
			placeholder: "Busque um usuario pelo username, nome ou email",
			findBy: "Busca por...",
		},
		http: {
			placeholderSelect: "Selecione o status HTTP que deseja:",
			placeholderInput: "Digite seu codigo http aqui",
			textCheckbox: "Quero selecionar outro codigo HTTP",
		}
	},
};


export default strings;