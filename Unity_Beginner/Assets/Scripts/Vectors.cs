using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Vectors : MonoBehaviour
{
    public int a;
    public int b;

    // Update is called once per frame
    void Update()
    {
        Debug.Log(new Vector2(a, b).magnitude);
    }
}
