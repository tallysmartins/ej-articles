void CWE369_Divide_by_Zero__int_fscanf_divide_01_bad()
{
    int data;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    /* POTENTIAL FLAW: Possibly divide by zero */
    printIntLine(100 / data);
}
