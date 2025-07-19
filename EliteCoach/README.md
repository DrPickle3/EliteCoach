# Dev the app

## terminals

You have to have the virtual Android Emulator opened before starting the terminals.
Open Android Studio -> More actions -> Virtual something

First terminal in EliteCoach/EliteCoach/android for the build

./gradlew installDebug (Does the entire build)
./gradlew clean (refresh the build folder to get a clean start) (next build will be longer) (TODO when changing native dependencies)

Second Terminal in ELiteCoach/EliteCoach to run the app

npx react-native start
