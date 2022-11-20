import { defineAbility } from "@casl/ability";

const ability = (user) =>
	defineAbility((can) => {
		//console.log("ABILITY PARAM USER ", user);

		if (user) {
			if (user.user.role.key === "admin") {
				can("manage", "all");
			} else {
				//TODO:  user.permissions bilgisine göre Can ifadelerini oluştur

				user.user.permissions.map((item, index) => {
					// console.log("PERM MAP ITEM", item);

					const permissionKey = item.permission_key;

					if (item.create === 1) {
						can("create", permissionKey);
					}

					if (item.read === 1) {
						can("read", permissionKey);
					}

					if (item.delete === 1) {
						can("delete", permissionKey);
					}

					if (item.update === 1) {
						can("update", permissionKey);
					}
				});
			}
		}
	});

export default ability;
