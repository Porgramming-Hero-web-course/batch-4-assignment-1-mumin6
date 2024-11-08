interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, update: Partial<Profile>): Profile => {
  if (update.age) {
    profile.age = update.age;
  }
  if (update.name) {
    profile.name = update.name;
  }
  if (update.email) {
    profile.email = update.email;
  }
  return profile;
};


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
