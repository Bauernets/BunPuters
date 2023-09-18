-- Program made by AndySpam
function split_string(str, pat)
    -- Split a string into a table
    local t = {}
    local fpat = "(.-)" .. pat
    local last_end = 1
    local s, e, cap = str:find(fpat, 1)
    while s do
        if s ~= 1 or cap ~= "" then
            table.insert(t, cap)
        end
        last_end = e + 1
        s, e, cap = str:find(fpat, last_end)
    end
    if last_end <= #str then
        cap = str:sub(last_end)
        table.insert(t, cap)
    end
    return t
end
function clear()
    -- Clear the screen
    term.clear()
    term.setCursorPos(1, 1)
end

local home = "https://turtle.bauernets.com/stat"

while true do
    local delay = 2
    print("...")
    
    local source = http.get(home)
    local aSource = source.readAll()

    local moves = split_string(aSource, ",")

    source.close()
    local responseString = ""

    for i = 1, #moves do
        local move = moves[i]
        print("Running action " .. move)

        fn = loadstring(move)
        setfenv(fn, getfenv())

        print("Running...")
        print(fn)

        local response = fn()
        if response == nil then
            response = "nil"
        end
        responseString = responseString .. response .. ","
    end

    print("Response: " .. responseString)
    if responseString == nil then
        print("responce string is blank:")

        local post = http.post("https://turtle.bauernets.com/shell/shell.php", "response=" .. responseString)
        print("posted")
    end

    sleep(delay)
end