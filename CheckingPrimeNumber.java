import java.io.IOException;
import java.util.Scanner ;

import java.io.InputStream;
public class CheckingPrimeNumber{
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.


        while (true) {
            System.out.print("Enter a number  ");


            Scanner sc = new Scanner(System.in);

            int x = sc.nextInt();
            int z = 0;
            for (int y = 2; y < x; y++) {

                if (x % y == 0) {

                    z = 1;


                }
            }
            if (z == 1) {
                System.out.println("Number Is Not Prime");
            } else {
                System.out.println("Number Is  Prime");
            }
            System.out.print("\nPress Q to quit, any other key to continue: ");
            String choice = sc.next();

            if (choice.equalsIgnoreCase("Q")) {
                System.out.println("Program stopped.");
                break;   // exits loop
            }

        }
    }
}
        //TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
        // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.


