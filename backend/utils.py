import os
import sys


def get_base_application_path():
    """Dynamically fetches the application's root project directory
    path based on if the application is running as a script or as 
    a frozen exe.

    This does not return the path of the main Python executable,
    server.py, located in /backend/dist/server/server. Instead,
    it returns the applications root directory path, such as 
    /usr/lib/optic-nerve/resources/app/.

    Returns:
        str: the string of current application project directory.
    """
    if getattr(sys, 'frozen', False):
        application_path = os.path.dirname(sys.executable)
        return "/".join(application_path.split("/")[:-3]) + "/"
    elif __file__:
        application_path = os.path.dirname(__file__)
        return "/".join(application_path.split("/")[:-1]) + "/"
    
def ensure_path_available(path):
    # Path doesn't exist, make new directories
    if not os.path.isdir(path):
        os.makedirs(path)
    
    # Ensure 'other' permissions are set to read, write, execute
    if get_directory_permissions(path)[2] < 7:
        os.chmod(path, 0o777)
    
    return path


def get_directory_permissions(directory_path):
    platform = sys.platform
    if platform == "linux":
        return [int(i) for i in list(oct(os.stat(directory_path).st_mode)[-3:])]
    elif platform == "macos":
        # TODO(jordanhuus): need to test/implement from windows machine
        # return [int(i) for i in list(oct(os.stat(directory_path).st_mode)[-3:])]
        print("blah....")
    elif platform == "win":
        # TODO(jordanhuus): need to test/implement from windows machine
        # return [int(i) for i in list(oct(os.stat(directory_path).st_mode)[-3:])]
        print("blah....")

    print("WARNING: Couldn't identify the OS platform, attempting to fetch " \
          "directory permissions generically which may be incorrect.")
    return [int(i) for i in list(oct(os.stat(directory_path).st_mode)[-3:])]
