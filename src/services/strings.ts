const strings = {
	components: {
		formLogin: {
			title: "Login",
			usernamePlaceholder: "Digite seu nome de usuário aqui",
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
		add: "Adicionar",
		details: "Detalhes",
		edit: "Editar",
		delete: "Deletar",
		create: "Criar",
		register: "Cadastrar",
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
		},
		users: {
			title: "Lista de usuários do site",
		},
		register: {
			title: "Cadastre-se em nosso site",
			placeholders: {
				username: "Digite o seu nome de usuário",
				email: "Digite seu email",
				password: "Digite sua senha",
				confirmPassword: "Confirme sua senha",
			},
			termsOfUse: "Li e aceito os Termos de Uso",
		},
	},
};


export default strings;