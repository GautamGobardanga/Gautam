//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        int w=4;
        int m=4;

        for (int i = 0; i <= 6; i++) {
            for (int z = 0; z <= 7; z++) {
                if (z < w)
                    System.out.print(" ");
                else if (z <= m)
                    System.out.print("*");
            }
             if (i < 3) {
                 w = w - 1;
                 System.out.println();
                 m = m + 1;
             }
             else {
                 w = w + 1;
                 m = m - 1;
                 System.out.println();
             }


        }

            //TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
            // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.

        }
    }
