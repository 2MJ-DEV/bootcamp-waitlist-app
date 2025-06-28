import instance from "..";

const { RASENGAN_SMAD_PRIVATE_KEY, RASENGAN_SMAD_PROJECT_ID } = import.meta.env;

const waitlistProvider = {
	subscribe: async (data: { email: string; name: string }) => {
		try {
			const payload = {
				email: data.email,
				project_id: RASENGAN_SMAD_PROJECT_ID,
				private_key: RASENGAN_SMAD_PRIVATE_KEY,
				name: data.name,
			};

			const response = await instance.post("/email/save", payload);

			if (response.status === 201) {
				return { success: true };
			}

			return { error: "An error occurred while subscribing to the waitlist." };
		} catch (error) {
			console.error(error);

			return { error: "An error occurred while subscribing to the waitlist." };
		}
	},
};

export default waitlistProvider;
