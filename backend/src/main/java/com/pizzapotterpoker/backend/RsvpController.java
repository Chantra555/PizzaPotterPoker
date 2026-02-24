package com.pizzapotterpoker.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/rsvp")
@CrossOrigin(origins = "*")
public class RsvpController {

    @Autowired
    private RsvpRepository rsvpRepository;

    @GetMapping
    public List<Rsvp> getAllRsvps() {
        return rsvpRepository.findAll();
    }

    @PostMapping
    public Rsvp createRsvp(@RequestBody Rsvp rsvp) {
        return rsvpRepository.save(rsvp);
    }
}