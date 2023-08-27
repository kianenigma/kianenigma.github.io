import subprocess
import re

def get_cowsay_fortune():
    process = subprocess.Popen("fortune | cowsay", shell=True, stdout=subprocess.PIPE)
    stdout, _ = process.communicate()
    return stdout.decode("utf-8")

def update_readme(content):
    with open("README.md", "r") as file:
        readme_content = file.read()

    start_marker = "<!--START_SECTION:cowsay-->"
    end_marker = "<!--END_SECTION:cowsay-->"

    new_content = f"{start_marker}\n```\n{content}\n```\n{end_marker}"

    updated_readme = re.sub(f"{re.escape(start_marker)}.*?{re.escape(end_marker)}", new_content, readme_content, flags=re.DOTALL)

    with open("README.md", "w") as file:
        file.write(updated_readme)

if __name__ == "__main__":
    cowsay_output = get_cowsay_fortune()
    update_readme(cowsay_output)
