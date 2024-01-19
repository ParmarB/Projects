userAsk = 'c'
print("Welcome to Cryptographic Techniques Program")
while (userAsk == 'c'):
    userMethod = input("Please enter your selection:\n 1. Encrypt\n 2. Decrypt\n")
    userKey = int(input("Please enter the key K:\n"))

    userSentence = input("Please enter your phrase here:\n")

    encrypted_result = ""
    decrypted_result = ""

    cipher = dict()
    cipher = {'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
            '10':'a','11':'b','12':'c','13':'d','14':'e','15':'f','16':'g','17':'h','18':'i','19':'j','20':'k','21':'l',
            '22':'m','23':'n','24':'o','25':'p','26':'q','27':'r','28':'s','29':'t','30':'u','31':'v','32':'w','33':'x',
                '34':'y','35':'z','36':'A','37':'B','38':'C','39':'D','40':'E','41':'F','42':'G','43':'H','44':'I','45':'J',
                '46':'K','47':'L','48':'M','49':'N','50':'O','51':'P','52':'Q','53':'R','54':'S','55':'T','56':'U','57':'V',
                '58':'W','59':'X','60':'Y', '61':'Z', '62':" "}
    if (userMethod == '1'):
    #encoding
        for char in userSentence:
            for keys,values in cipher.items():
                if (values == char ):
                    print(keys)
                    coded_char = (int(keys) + userKey)%63
                    print('coded',coded_char)
                    newcoded_char = str(coded_char)
                    for keys,values in cipher.items():
                        if(keys == newcoded_char):
                            print("coded values",values)
                            encrypted_result = encrypted_result + values
        print("result",encrypted_result)

    #decoding
    elif (userMethod == '2'):
        for char in userSentence:
            for keys,values in cipher.items():
                if (values == char ):
                    print(keys)
                    coded_char = (int(keys) - userKey)%63
                    print('coded',coded_char)
                    newcoded_char = str(coded_char)
                    for keys,values in cipher.items():
                        if(keys == newcoded_char):
                            print("coded values",values)
                            decrypted_result = decrypted_result + values
        print("result",decrypted_result)
    else :
        userMethod = input("Invalid input, please enter your selection:\n 1. Encrypt\n 2. Decrypt\n")
    
    #user input for continue or exit
    userAsk = input("Press c to continue or e to exit:\n")
    if (userAsk == 'c'):
        continue
    elif(userAsk=='e'):
        print("Thank you, good bye!")
        break
    else:
        while(userAsk != 'c' or userAsk != 'e'):
            userAsk = input("Invalid input, please press c to continue or e to exit:\n")
            if(userAsk == 'c' or userAsk == 'e'):
                break