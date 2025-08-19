# Dev the app

## terminals

You have to have the virtual Android Emulator opened before starting the terminals.
Open Android Studio -> More actions -> Virtual Device Manager

Run this in a fresh terminal if you cannot run it in Android Studio

    ~/Android/Sdk/emulator/emulator -avd Medium_Phone -gpu host -use-system-libs -no-accel


First terminal in EliteCoach/EliteCoach/android for the build

    ./gradlew installDebug (Does the entire build)
    ./gradlew clean (refresh the build folder to get a clean start) (next build will be longer) (TODO when changing native dependencies)

Second Terminal in ELiteCoach/EliteCoach to run the app

    npx react-native start
