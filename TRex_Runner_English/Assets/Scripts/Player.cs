﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{    
    //public float fallMultiplier = 2.5f;
    //public float lowJumpMultiplier = 2f;

    void FixedUpdate()
    {
        //FlowJump();
        //Down();        
    }

    /*void Down()
    {
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            if (GameController.run == true && GameController.die == false && ground == true && down == false)
            {
                down = true;
                animator.SetBool("Down", down);
            }
        }
        else if (!Input.GetKey(KeyCode.DownArrow))
        {
            if (GameController.run == true && GameController.die == false && ground == true && down == true)
            {
                down = false;
                animator.SetBool("Down", down);
            }
        }
    }*/

    /*void FlowJump()
    {
        if (rb.velocity.y < 0)
        {            
            rb.velocity += Vector2.up * Physics2D.gravity.y * (fallMultiplier) * Time.deltaTime;
        }
        else if (rb.velocity.y > 0 && !Input.GetKey(KeyCode.Space))
        {            
            rb.velocity += Vector2.up * Physics2D.gravity.y * (lowJumpMultiplier) * Time.deltaTime;            
        }
    }*/
}
