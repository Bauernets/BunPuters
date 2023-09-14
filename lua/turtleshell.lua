--uses http to get commands from "https://turtle.azurewebsites.net/shell/sh.txt"
--and runs them, posting the response to "https://turtle.azurewebsites.net/shell/shIn.txt" or "https://turtle.azurewebsites.net/shell/shell.php"
--where the post data is response=RESPONSE

while true do
    print("...")
    local source = http.get("https://turtle.azurewebsites.net/shell/sh.txt")
    local move = source.readAll()
    source.close()
    local delay = 1
    print("Running action " .. move)
    fn = loadstring(move)
    setfenv(fn, getfenv())
    local response = fn()
    if response == nil then
        response = "nil"
    end
    print("Response: " .. response)
    local post = http.post("https://turtle.azurewebsites.net/shell/shell.php", "response=" .. response)
    
    sleep(delay)
end